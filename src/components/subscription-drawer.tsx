import * as React from "react";

import { useMediaQuery } from "usehooks-ts";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "../components/ui/drawer";
import useLanguage from "../utils/utils";
import SubscriptionForm from "./ui/subscription-form";
import { Button } from "./ui/button";

interface SubscriptionFormProps {
  plan: string;
}

export function SubscriptionDrawer({ plan }: SubscriptionFormProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const currentLanguage = useLanguage();

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Subscribe</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <SubscriptionForm plan={plan} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Subscribe</Button>
      </DrawerTrigger>
      <DrawerContent className="px-4 py-6">
        <SubscriptionForm plan={plan} />
      </DrawerContent>
    </Drawer>
  );
}
