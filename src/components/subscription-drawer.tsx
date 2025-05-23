import * as React from "react";

import { useMediaQuery } from "usehooks-ts";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "../components/ui/drawer";
import SubscriptionForm from "./ui/subscription-form";
import { Button } from "./ui/button";

import useLanguage from "../utils/utils";

interface SubscriptionFormProps {
  plan: string;
}

export function SubscriptionDrawer({ plan }: SubscriptionFormProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const currentLanguage = useLanguage();
  const subscribe = currentLanguage.pricingData.subscribe;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>{subscribe}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <SubscriptionForm plan={plan} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>{subscribe}</Button>
      </DrawerTrigger>
      <DrawerContent className="px-4 py-6">
        <SubscriptionForm plan={plan} setOpen={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}
