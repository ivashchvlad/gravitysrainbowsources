import * as React from 'react'
import { FunctionComponent, useEffect } from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface IPageProps extends RouteProps {
    title: string;
}

const Page: FunctionComponent<IPageProps> = props => {
    useEffect(() => {
        document.title = "GR sources | " + props.title;
    });

    const { title, ...rest } = props;
    return <Route { ...rest } />;
};

export default Page;