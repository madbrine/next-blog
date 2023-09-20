import PublH from "../publ-h";
import PublP from "../publ-p";
import PublQ from "../publ-q";
import PublicationImage from "../publication-image";

interface IProps {
    contentData: {
        type: string;
        data: string;
    }[]
}
function PublicationContent({ contentData }: IProps) {
    return (
        <>

            {
                contentData.map((content, key) => {
                    return (
                        <>
                            {content.type === 'img' &&
                                <PublicationImage imageUrl={content.data} key={key} />
                            }
                            {content.type === 'h' &&
                                <PublH text={content.data} key={key} />
                            }
                            {content.type === 'q' &&
                                <PublQ text={content.data} key={key} />
                            }
                            {content.type === 'p' &&
                                <PublP text={content.data} key={key} />
                            }
                        </>
                    )
                })

            }
        </>
    )
}
export default PublicationContent;