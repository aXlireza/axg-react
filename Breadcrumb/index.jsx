export default function Breadcrumb({
    dev,
    dropdownone_head,
    dropdownone_body,
    dropdowntwo_head,
    dropdowntwo_body,
    primaryText,
    customclasses,
}) {
    return (<axg-element
        dev={dev}
        mode={'breadcrumb_v1'}
        customclasses={customclasses}
        dropdownone_head={JSON.stringify(dropdownone_head)}
        dropdownone_body={JSON.stringify(dropdownone_body)}
        dropdowntwo_head={JSON.stringify(dropdowntwo_head)}
        dropdowntwo_body={JSON.stringify(dropdowntwo_body)}
        primarytext={JSON.stringify(primaryText)}
    ></axg-element>)
}