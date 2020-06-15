import React, { useContext } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { directoryContext } from '../provider/directory.provider';

function Genre({ match }) {
    const { params: { genreid } } = match;
    const { directory } = useContext(directoryContext);

    return (
        <div>
            {
                genreid
            }

        </div>
    )
}

export default Genre;
