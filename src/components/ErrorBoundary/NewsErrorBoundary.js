import React, { Component } from 'react'
import { FlexContainer } from "../UI/Layouts";
class NewsErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <FlexContainer justifyContent='center' alignItems='center' style={{ height: '80vh' }}>
                    <h3>Something went wrong in News</h3>
                </FlexContainer>
            );
        }

        return this.props.children;
    }
}

export default NewsErrorBoundary;