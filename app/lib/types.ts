export interface ProjectIcon {
  icon: string;
  name: string;
}

export interface ProjectDetail {
  images: string[];
  title: string;
  description: string;
  icons: ProjectIcon[];
  link: string;
  tag: string;
}

export interface Project {
  name: string;
  description: string;
  details: ProjectDetail[];
  tags: string[];
}