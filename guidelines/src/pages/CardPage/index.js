import { useParams, Navigate, Link } from 'react-router-dom';
import './index.css';
import documentos from '../../public_docs/public_docs'
import CloseIconOverlay from '../../components/CloseIconOverlay';

// TODO: transformar em um service
function GetPageById(id){
  for (const key in documentos) {
    if (documentos[key].id === Number(id)) {
      return documentos[key];
    }
  }
  return null;
}

function CardPage(){
  const { pageId } = useParams()
  let page = GetPageById(pageId);

  if (page == null){
    return <Navigate to='/Error'/>;
  }
  console.log(page.url_header);
    return (
        <div className="reading-page">
            <CloseIconOverlay/>
            <div className="image-crop">
            <img alt="three objects" className="reading-header" src={page.url_header} />
            </div>
            <h1>{ page.title }</h1>
            <p className="prelude">{ page.prelude }</p>
            {page.section.map((s) => {
                return (
                <div key={s.sub_title}>
                    <h3>{s.sub_title}</h3>
                    {s.paragraph.map((para) => {
                        return <p key={para}>{para}</p>;
                    })}
                </div>
                )
            })}
        </div>
    );
}

export default CardPage;
