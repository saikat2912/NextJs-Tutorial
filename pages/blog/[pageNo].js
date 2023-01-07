const pageNo = () =>{
    const router = useRouter();
    const pageNumber = router.query.pageNo
    return(
        <>
        <h1>my blog2 content</h1>
        </>
    );
};

export default pageNo;