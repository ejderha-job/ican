export const getSubcategories = async () => {
    const response = await fetch("http://backend:9000/categories", { next: { revalidate: 10 } })
    const subcategories = await response.json()
    return { subcategories }
}