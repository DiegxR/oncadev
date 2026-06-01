"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/src/vanta.birds";

type VantaBirdsProps = {
	backgroundColor?: string | number;
	color1?: string | number;
	color2?: string | number;
	quantity?: number;
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

export default function VantaBirds({
	backgroundColor = "#07192F",
	color1 = "#ff0000",
	color2 = "#00d1ff",
	quantity = 4,
	className,
	style,
}: VantaBirdsProps) {
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
		if (!el) return;

		const opts: any = {
			el,
			THREE,
			backgroundColor: parseColor(backgroundColor) ?? 0x07192f,
			color1: parseColor(color1) ?? 0xff0000,
			color2: parseColor(color2) ?? 0x00d1ff,
			quantity: Math.max(2, Math.min(6, Math.floor(quantity))),
		};

		try {
			instanceRef.current = BIRDS(opts);
		} catch (err) {
			// BIRDS export sometimes registers via VANTA.register and returns instance
			try {
				// @ts-ignore
				instanceRef.current = (window as any).VANTA?.BIRDS?.apply?.(null, [opts]) || (window as any).VANTA?.create?.("BIRDS", opts);
			} catch {
				console.error("vanta birds init failed", err);
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
	}, [backgroundColor, color1, color2, quantity]);

	return <div ref={containerRef} className={className} style={Object.assign({ position: "absolute", inset: 0 }, style)} />;
}

