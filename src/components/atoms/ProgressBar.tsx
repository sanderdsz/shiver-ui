import 'shiver-design-system';

export interface ProgressBarProps {
  value: number;
}

export const ProgressBar = ({value}: ProgressBarProps) => {
  return <progress value={value} max={100}></progress>;
};
