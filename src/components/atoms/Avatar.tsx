import 'shiver-design-system';
import {Colors} from '../../utils/Colors';

export interface AvatarProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  borderColor?: 'gray01' | 'blue04';
}

export const Avatar = ({
  src,
  alt,
  height,
  width,
  borderColor,
  ...props
}: AvatarProps) => {
  const colorVariant = borderColor === 'gray01' ? Colors.gray01 : Colors.blue04;
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={{borderColor: colorVariant}}
      className="avatar"
    />
  );
};
