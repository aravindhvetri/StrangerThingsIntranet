import * as React from "react";
import type { IStrangerThingsIntranetProps } from "./IStrangerThingsIntranetProps";
import MainComponent from "./MainComponent";
import { sp } from "@pnp/sp";
import "../../../External/style.css";

interface IStrangerThingsIntranetState {
  isLoading: boolean;
}

export default class StrangerThingsIntranet extends React.Component<
  IStrangerThingsIntranetProps,
  IStrangerThingsIntranetState
> {
  constructor(prop: IStrangerThingsIntranetProps, state: {}) {
    super(prop);
    this.state = {
      isLoading: true,
    };
    sp.setup({
      spfxContext: this.props.context as any,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  public render(): React.ReactElement<IStrangerThingsIntranetProps> {
    if (this.state.isLoading) {
      return (
        <div className="loaderScreen">
          <img
            src={require("../../.././External/giphy.gif")}
            alt="Loading..."
          />

          <div className="loadingText">
            {"LOADING...".split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {char}
              </span>
            ))}
          </div>
        </div>
      );
    }
    return <MainComponent context={this.props.context} />;
  }
}
