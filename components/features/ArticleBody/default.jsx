import React, { Fragment } from 'react';
import { useFusionContext } from 'fusion:context';
import get from 'lodash.get';
import ApesterArticleBody from '../ApesterArticleBody/powerup';

const ArticleBody = () => {
    const { globalContent: item = {} } = useFusionContext();

    const parseElement = (element) => {
        console.log(element)
        const { _id: key = index, type, content } = element;

        switch (type) {
            case 'text' : {
                return (
                    ( content.length > 0 && content !== '<br/>') ? <p>{ content }</p> : null
                )
            }
            case 'image' : {
                return (
                    <Fragment key={key}>
                        <div className='image'>
                            <img src={ element.url } />
                        </div>
                    </Fragment>
                )
            }
            case 'custom_embed': {
                const subType = get(element, 'subtype', '');
          
                switch (subType) {
                  case 'apester-embed': {
                    return (
                      <ApesterArticleBody key={key} mediaId={get(element, 'embed.config.mediaId', '')}/>
                    );
                  }
                  default:
                    return null;
                }
            }
        }
    }


    const renderArticle = () => {
        return item.content_elements.map(element => parseElement(element));
    }

    return (
        <div>
            <h1>{ item.headlines.basic }</h1>
            <i>{ item.subheadlines.basic }</i>

            { renderArticle() }
        </div>
    )
}

export default ArticleBody;