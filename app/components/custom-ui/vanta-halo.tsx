"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/src/vanta.halo";

type VantaHaloProps = {
	backgroundColor?: string | number;
	className?: string;
	style?: React.CSSProperties;
};

function parseColor(input?: string | number): number | undefined {
	if (input == null) return undefined;
	if (typeof input === "number") return input;
	const s = String(input).trim();
	if (s.startsWith("#")) return Number("0x" + s.slice(1));
	if (s.startsWith("0x")) return Number(s);
	// fallback try parse int
	const n = Number(s);
	return Number.isNaN(n) ? undefined : n;
}

export default function VantaHalo({
	backgroundColor = 0xb110b,
	className,
	style,
}: VantaHaloProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const instanceRef = useRef<any>(null);

	useEffect(() => {
		// ensure Three aliases for older vanta source
		try {
			if (!(THREE as any).PlaneBufferGeometry && (THREE as any).PlaneGeometry) {
				(THREE as any).PlaneBufferGeometry = (THREE as any).PlaneGeometry;
			}
			if (!(THREE as any).BoxBufferGeometry && (THREE as any).BoxGeometry) {
				(THREE as any).BoxBufferGeometry = (THREE as any).BoxGeometry;
			}
		} catch {
			// ignore
		}

		const el = containerRef.current;
		if (el) {
			// Destroy any existing effect first
			if (instanceRef.current) {
				try {
					instanceRef.current.destroy();
				} catch (e) {
					// ignore
				}
			}
			const opts: any = {
				el,
				THREE,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				baseColor: 0x24c84a,
				backgroundColor: parseColor(backgroundColor) ?? 0xb110b,
				amplitudeFactor: 0.6,
				xOffset: -0.03,
				size: 0.4,
			};

			try {
				instanceRef.current = HALO(opts);
			} catch (err) {
				// HALO export sometimes registers via VANTA.register and returns instance
				try {
					// @ts-ignore
					instanceRef.current = (window as any).VANTA?.HALO?.apply?.(null, [opts]) || (window as any).VANTA?.create?.("HALO", opts);
				} catch {
					console.error("vanta halo init failed", err);
				}
			}
		}

		return () => {
			if (instanceRef.current && typeof instanceRef.current.destroy === "function") {
				try {
					instanceRef.current.destroy();
				} catch {
					/* ignore */
				}
				instanceRef.current = null;
			}
		};
	}, [backgroundColor]);

	return <div ref={containerRef} className={className} style={Object.assign({ position: "absolute", inset: 0 }, style)} />;
}
