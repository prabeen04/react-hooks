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
                <div style={{ height: '600px', backgroundColor: '#f4f4f4' }}>
                    <FlexContainer justifyContent='center' alignItems='center'>
                        <h3>Something went wrong in News</h3>
                    </FlexContainer>
                </div>
            );
        }

        return this.props.children;
    }
}

export default NewsErrorBoundary;