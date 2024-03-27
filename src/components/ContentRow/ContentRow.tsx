import './ContentRow.css'
import Content from '../../types/Content'
import parse from "html-react-parser";

interface ContentViewProps {
    content: Content
}

function ContentRow({ content }: ContentViewProps) {
    return (
        <>
            {parse(content.contents)}
        </>
    )
}

export default ContentRow
