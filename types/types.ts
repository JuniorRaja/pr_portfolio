export interface NavBarItem {
  id: number;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

export interface NavBarList {
  navItems: NavBarItem[];
}

export interface AlbumItem {
  id: number;
  name: string;
  likes: number;
  views: number;
  img: string;
  route: string;
  des: string;
}

export interface ColorState {
  primaryColor: string;
}