async function main() {
    try {
        await createPost({ title: 'Post One' });
        await createPost({ title: 'Post Two' });

        const coldDrinks = await getColdDrinks();

        const [deletedPost1, deletedPost2] = await Promise.all([
            deletePost(),
            deletePost(),
        ]);

        console.log('Posts:');
        posts.forEach((post) => {
            console.log(post.title);
        });

        console.log(`After Having ${coldDrinks}:`);
        console.log(deletedPost1);
        console.log(deletedPost2);
    } catch (error) {
        console.error(error);
    }
}

main();