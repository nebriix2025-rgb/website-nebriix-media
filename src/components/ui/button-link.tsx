import Link from "next/link";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

type ButtonLinkProps = ComponentProps<typeof Button> & {
  href: string;
};

/**
 * Button styling on a real anchor.
 *
 * Base UI's Button assumes it renders a native <button>; handing it a Link
 * without `nativeButton={false}` strips button semantics and warns. Centralising
 * that here keeps every CTA correct instead of relying on each call site.
 */
export function ButtonLink({ href, children, ...props }: ButtonLinkProps) {
  return (
    <Button render={<Link href={href} />} nativeButton={false} {...props}>
      {children}
    </Button>
  );
}
