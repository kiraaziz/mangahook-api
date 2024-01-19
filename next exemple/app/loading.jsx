const LoadingPage = () => {

    return (
        <div style={{zIndex: 99999}} className="w-screen h-[100svh] static top-0 left-0 backdrop-blur-xl flex items-center justify-center ">
            <img src="/loading.gif" className="w-56" />
        </div>
    )
}

export default LoadingPage