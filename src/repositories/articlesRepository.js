import { supabase } from "../lib/supabase";

export const articlesRepository = {
    async getAll() {
        const { data, error } = await supabase
            .from("articles")
            .select(`
                id,
                title,
                description,
                content,
                image,
                created_at,
                read_time,
                is_trending,
                is_staff_pick,
                authors (
                    name,
                    image
                ),
                article_topics (
                    topics (
                        name
                    )
                )
            `);

        if (error) {
            console.error("Error fetching articles:", error);
            return [];
        }

        return data;
    },
};