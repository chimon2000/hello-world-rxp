/*
* This file demonstrates a basic ReactXP app.
*/

import { Styles, Component, Animated, Types, View, Text, Link } from 'reactxp'

import RX = require('reactxp')

const styles = {
    container: Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    helloWorld: Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12
    }),
    instructions: Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 40
    }),
    docLink: Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue'
    })
};

class App extends Component<null, null> {
    private _translationValue: Animated.Value;
    private _animatedStyle: Types.AnimatedTextStyleRuleSet;

    constructor() {
        super();

        this._translationValue = new Animated.Value(-100);
        this._animatedStyle = Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }

    componentDidMount() {
        let animation = Animated.timing(this._translationValue, {
              toValue: 0,
              easing: Animated.Easing.OutBack(),
              duration: 500
            }
        );

        animation.start();
    }

    render(): JSX.Element | null {
        return (
            <View style={ styles.container }>
                <Animated.Text style={ [styles.helloWorld, this._animatedStyle] }>
                    Hello World
                </Animated.Text>
                <Text style={ styles.welcome }>
                    Welcome to ReactXP
                </Text>
                <Text style={ styles.instructions }>
                    Edit App.tsx to get started
                </Text>
                <Link style={ styles.docLink } url={ 'https://microsoft.github.io/reactxp/docs' }>
                    View ReactXP documentation
                </Link>
            </View>
        );
    }
}

export default App;
