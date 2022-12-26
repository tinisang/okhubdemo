import Stories from 'react-insta-stories';

export const StoryProject = ()=>{
    const stories = [
        'https://phamtiensang.site/wp-content/uploads/2022/12/Screenshot-2022-12-24-105050.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/mandate.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/Screenshot-2022-12-24-105050.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/mandate.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/Screenshot-2022-12-24-105050.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/mandate.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/Screenshot-2022-12-24-105050.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/mandate.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/Screenshot-2022-12-24-105050.png',
        'https://phamtiensang.site/wp-content/uploads/2022/12/mandate.png',
    ];
    return (
        <>
            
            <Stories
                stories={stories}
                defaultInterval={1500}
                width={432}
                height={768}
            />
           
        </>
    )
}