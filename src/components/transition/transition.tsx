import Taro from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { TransitionProps, TransitionState } from "./typing";

class KTransition extends KComponent<TransitionProps, TransitionState> {
  public static defaultProps = {
    timeout: 300,
    action: false
  };

  private _isMounted: boolean = false;

  constructor(props) {
    super(props);
    this.state = {
      enter: false,
      enterActive: false,
      enterDone: false,
      exit: false,
      exitActive: false,
      exitDone: false
    };
  }

  public componentDidMount() {
    this._isMounted = true;
  }

  public componentWillReceiveProps(nextProps) {
    if (this.props.action !== nextProps.action) {
      this.toggle(nextProps.action);
    }
  }

  public render() {
    const { transitionName, className, action, style, onClick } = this.props;
    const {
      enter,
      enterActive,
      enterDone,
      exit,
      exitActive,
      exitDone
    } = this.state;

    let classString = classnames({
      [`${transitionName}-enter`]: enter,
      [`${transitionName}-enter-active`]: enterActive,
      [`${transitionName}-enter-done`]: enterDone,
      [`${transitionName}-exit`]: exit,
      [`${transitionName}-exit-active`]: exitActive,
      [`${transitionName}-exit-done`]: exitDone
    });

    classString = classnames(className, classString);

    return (
      (action || (!action && !exitDone && this._isMounted)) && (
        <View className={classString} style={style} onClick={this.onClick}>
          {this.props.children}
        </View>
      )
    );
  }

  private onClick = e => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  };

  private toggle = (action = this.props.action) => {
    const { timeout } = this.props;
    const activeDelay = 50;

    if (action) {
      this.setState(
        {
          enter: true,
          exit: false,
          exitActive: false,
          exitDone: false
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                enterActive: true
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    enterDone: true
                  });
                }, timeout);
              }
            );
          }, activeDelay);
        }
      );
    } else {
      this.setState(
        {
          exit: true,
          enter: false,
          enterActive: false,
          enterDone: false
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                exitActive: true
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    exitDone: true
                  });
                }, timeout);
              }
            );
          }, activeDelay);
        }
      );
    }
  };
}

export default KTransition;
