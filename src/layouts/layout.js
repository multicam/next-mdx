import {MDXProvider} from '@mdx-js/react';
function Layout({children, components, ...props}) {
    return (
        <MDXProvider components={components}>
            <div className="w-full pt-16 md:pt-4">
                {children}
            </div>
        </MDXProvider>
    )
}

export default Layout;