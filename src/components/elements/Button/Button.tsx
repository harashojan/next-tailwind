import type { LinkProps } from "next/link";
import Link from "next/link";
import { createElement, forwardRef } from "react";

import cc from "classcat";

import type { ButtonProps, Tag } from "./types";

const variants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  outline: "bg-white text-blue-600 border border-blue-600 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

const isExternalLink = (href: LinkProps["href"]) => {
  const target = typeof href === "string" ? href : href.href;
  return target?.startsWith("http") || target?.startsWith("//");
};

/**
 * @package
 */
export const Button = forwardRef<Element, ButtonProps<Tag>>((props, ref) => {
  if (!props.tag) {
    throw new Error("tag props is required");
  }
  const { className, size = "md", variant = "primary" } = props;

  const extClassName = cc([
    className,
    "rounded-md",
    variants[variant],
    sizes[size],
  ]);

  if (props.tag === "a") {
    const { linkProps, tag, ...otherProps } = props;
    return (
      <Link {...linkProps}>
        {createElement(tag, {
          ref,
          role: "button",
          target: isExternalLink(linkProps.href) ? "_blank" : undefined,
          rel: isExternalLink(linkProps.href)
            ? "noopener noreferrer"
            : undefined,
          className: extClassName,
          ...otherProps,
        })}
      </Link>
    );
  }

  const { tag, ...otherProps } = props;
  return createElement(tag, {
    ref,
    type: "button",
    className: extClassName,
    ...otherProps,
  });
});

Button.displayName = "Button";

// import { cloneElement, forwardRef } from "react";

// import { Button as MantineButton } from "@mantine/core";

// import type { ButtonProps } from "@mantine/core";

// export const Button = forwardRef<
//   HTMLButtonElement,
//   ButtonProps<"button" | "a"> & { dent?: boolean }
// >(({ sx, dent, ...props }, ref) => {
//   return cloneElement(<MantineButton />, {
//     sx: {
//       ...sx,
//       "&:not(:disabled):active": dent ? undefined : { transform: "none" },
//     },
//     ref,
//     ...props,
//   });
// });

// Button.displayName = "Button";
