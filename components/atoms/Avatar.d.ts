export interface AvatarProps {
    src: string;
    alt: string;
    height: number;
    width: number;
    borderColor?: 'gray01' | 'blue04';
}
export declare const Avatar: ({ src, alt, height, width, borderColor, ...props }: AvatarProps) => JSX.Element;
