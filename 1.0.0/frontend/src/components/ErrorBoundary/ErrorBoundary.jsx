import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hasError: false
        };

    }

    static getDerivedStateFromError() {

        return {
            hasError: true
        };

    }

    componentDidCatch(error, errorInfo) {

        console.error(
            "Application Error:",
            error,
            errorInfo
        );

    }

    render() {

        if (this.state.hasError) {

            return (
                <div className="error-page">

                    <h1>Something went wrong.</h1>

                    <p>
                        Please refresh the page and try again.
                    </p>

                    <button
                        onClick={() => window.location.reload()}
                    >
                        Refresh
                    </button>

                </div>
            );

        }

        return this.props.children;
    }
}

export default ErrorBoundary;