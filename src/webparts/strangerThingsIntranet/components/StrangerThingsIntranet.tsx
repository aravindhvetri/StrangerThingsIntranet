import * as React from "react";
import type { IStrangerThingsIntranetProps } from "./IStrangerThingsIntranetProps";
import MainComponent from "./MainComponent";
import { sp } from "@pnp/sp";

export default class StrangerThingsIntranet extends React.Component<
  IStrangerThingsIntranetProps,
  {}
> {
  constructor(prop: IStrangerThingsIntranetProps, state: {}) {
    super(prop);
    sp.setup({
      spfxContext: this.props.context as any,
    });
  }

  public render(): React.ReactElement<IStrangerThingsIntranetProps> {
    return <MainComponent context={this.props.context} />;
  }
}
