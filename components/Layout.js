const Layout = (Page) => {
    return () => (
        <div className="content">
            <Page />
            <style global jsx>{`
                html {
                    height: 100%;
                }
                body {
                    display: flex;
                    flex: 1 1 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    background-color: #00ff9c;
                    animation-name: changeBackgroundColor;
                    animation-duration: 6s;
                    animation-iteration-count: infinite;
                }

                .content {
                    height: 100%;
                }
                @keyframes changeBackgroundColor {
                    0% { background-color: #00ff9c }
                    33% { background-color: #ddfdf1 }
                    66% { background-color: #5fffc1 }
                    100% { background-color: #00ff9c }
                }
            `}</style>
        </div>
    )
}

export default Layout