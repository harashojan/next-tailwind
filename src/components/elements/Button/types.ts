import type { LinkProps } from "next/link";
import type { ComponentPropsWithRef } from "react";

export type Tag = "button" | "a";

export type Element = HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;

type Button = {
  tag: "button";
  type?: ComponentPropsWithRef<"button">["type"];
  role?: never;
};

type Anchor = {
  tag: "a";
  linkProps: LinkProps;
  href?: never;
  ref?: never;
  target?: never;
  role?: never;
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps<T extends Tag> = ComponentPropsWithRef<T> &
  (T extends "button" ? Button : Anchor) & {
    variant?: "primary" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
  } & IconProps;
