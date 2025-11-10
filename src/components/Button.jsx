import PropTypes from "prop-types"


const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    const relAttr = target === '_blank' ? 'noopener noreferrer' : undefined;
    if (href) {
        return (
            <a href={href} target={target} rel={relAttr} className={"btn btn-primary " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}
ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    const relAttr = target === '_blank' ? 'noopener noreferrer' : undefined;
    if (href) {
        return (
            <a href={href} target={target} rel={relAttr} className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}
ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}
export {
    ButtonPrimary,
    ButtonOutline
}
