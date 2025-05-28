import { Breadcrumb as ChakraBreadcrumb, Show, type SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";

export interface BreadcrumbProps extends ChakraBreadcrumb.RootProps {
  items: Array<{ title: React.ReactNode; url?: string }>;
  separator?: React.ReactNode;
  separatorGap?: SystemStyleObject["gap"];
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  function BreadcrumbRoot(props, ref) {
    const { items, separator, separatorGap, ...rest } = props;

    return (
      <ChakraBreadcrumb.Root ref={ref} {...rest}>
        <ChakraBreadcrumb.List gap={separatorGap}>
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <ChakraBreadcrumb.Item>
                  <ChakraBreadcrumb.Link href={item.url}>{item.title}</ChakraBreadcrumb.Link>
                </ChakraBreadcrumb.Item>
                <Show
                  fallback={<ChakraBreadcrumb.Separator>{separator}</ChakraBreadcrumb.Separator>}
                  when={last}
                >
                  <ChakraBreadcrumb.Item>
                    <ChakraBreadcrumb.CurrentLink>{item.title}</ChakraBreadcrumb.CurrentLink>
                  </ChakraBreadcrumb.Item>
                </Show>
              </React.Fragment>
            );
          })}
        </ChakraBreadcrumb.List>
      </ChakraBreadcrumb.Root>
    );
  },
);
