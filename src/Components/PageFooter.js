export const PageFooter = () => {
    function getYear () {
        return new Date().getFullYear().toString()
    }
    return (
        <p>© {getYear()} Dilkush Punja</p>
    )
}