import type { ComponentProps } from 'svelte';
import type SvgIcon from './SvgIcon.svelte';
import type { TransitionConfig } from 'svelte/transition';
import type Button from './Button.svelte';
import type SelectCard from './SelectCard.svelte';


export interface PopperProps {
	anchor: HTMLElement | null;
	open?: boolean;
	class?: string;
	reAdjustKey?: any;
	origin?: 'left' | 'right';
	animateFly?: boolean;
	style?: string;
	onMouseLeave?: (_e: Event) => void;
}

export interface PortalProps
	extends Omit<svelte.JSX.HTMLProps<HTMLElement>, 'rows' | 'slot' | 'target'> {
	target?: HTMLElement | null;
	open?: boolean;
	backdropProps?: Partial<{
		class: string;
		onTap: () => void;
	}>;
	transitionConfig?: TransitionConfig;
	dismissible?: boolean;
	onClose?: () => void;
}

export type SVGIconProps = ComponentProps<SvgIcon>;
export type ButtonProps = ComponentProps<Button>;
export type SelectCardProps = ComponentProps<SelectCard>;

export interface DropDownOptions {
	[key: string]: number | string | object;
}

export interface selectedOption {
	id: number;
	name: string;
}

export interface CarBrands {
  id?: number;
  name?: string;
	type?:string;
	image?: string;
}