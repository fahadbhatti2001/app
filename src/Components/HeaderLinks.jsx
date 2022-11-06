export const HeaderLinks = (props) => {
    return(
        <li className="font-PoppinsRegular text-base transition-all hover:text-primary-3">
            <a href={props.url}>{props.name}</a>
        </li>
    )
}