export default function Searchbar({
  preactive,
  checked,
  label,
  id,
  name,
  type,
  inputcustomclasses,
  customclasses,
  bg,
  color,
  placeholder,
  queryid,
  searchquerynames,
  searchquerylinks,
  collapseonmobile,
  dir,
  labelclasses,
  inputcovercustomclasses,
  reslistcustomclasses,
}) {

  // useEffect(() => {
  //   window['all_posts_names'] = all_posts_names;
  //   window['all_posts_links'] = all_posts_links;
  // }, [all_posts_names, all_posts_links])
  
  // const serachHandler = async () => {
  //   const icons = await fetch(`${process.env.RexfontAPI}/icons/`).then(res => res.json())
  //   setAll_posts_names(icons.map(icon => icon.name))
  //   setAll_posts_links(icons.map(icon => `/icons/${icon.name}/${icon.style}`))
  // }
  
  return <axg-element
    mode='searchbar_v2'
    reslistcustomclasses={reslistcustomclasses}
    preactive={preactive}
    checked={checked}
    label={label}
    id={id}
    name={name}
    type={type}
    inputcustomclasses={inputcustomclasses}
    customclasses={customclasses}
    bg={bg}
    color={color}
    placeholder={placeholder}
    queryid={queryid}
    searchquerynames={searchquerynames}
    searchquerylinks={searchquerylinks}
    collapseonmobile={collapseonmobile}
    dir={dir}
    labelclasses={labelclasses}
    inputcovercustomclasses={inputcovercustomclasses}
  ></axg-element>
}