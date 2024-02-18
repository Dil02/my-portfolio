import './PageFooter.css';

export const PageFooter = () => {
    function getYear () {
        return new Date().getFullYear().toString()
    }

    return (
        <p className='pageFooter'>© {getYear()} Dilkush Punja</p>
    )
}