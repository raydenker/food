function Footer() {
    return (
        <footer className="p-4 bg-green-900">
            <div className="container mx-auto">
                <div className="text-white flex justify-between">
                    <p>
                    © {new Date().getFullYear()} Copyright Text
                    </p>
                    <a href="https://raydenker.github.io/Shop/" className="grey-text text-lighten-4 right">Repo</a>
                </div>
            </div>
        </footer>
    )
}
export { Footer }