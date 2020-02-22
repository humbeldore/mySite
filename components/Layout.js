const styleContent = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: '1 1 auto',
    alignItems: 'center',
    justifyContent: 'center'
}

const Layout = (Page) => {
    return () => (
        <div style={styleContent}>
            <Page />
        </div>
    )
}

export default Layout