import '../code.css'

const CodeMod = ({langage, size, content}) =>{
    return(
    <div className={`code-contain ${size} scrollable` }>
        <pre>
            <code className={"language-"+langage}>
                {content}
            </code>
        </pre>
    </div>
    )
}
export default CodeMod;