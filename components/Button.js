import Button from '@material-ui/core/Button';

const ActionButton = (props) => {
    return (
        <div>
            <Button variant="contained" color="primary" target={props.target} href={props.link}>{props.submitText}</Button>
        </div>
    )
}

export default ActionButton
