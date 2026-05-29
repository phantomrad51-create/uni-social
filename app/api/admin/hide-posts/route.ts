import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { data: profile } = await supabase
    .from("profiles")
    .select("badge_role")
    .eq("id", user.id)
    .single()

  if (!["Founder", "Admin"].includes(profile?.badge_role ?? "")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const formData = await request.formData()
  const postId = formData.get("postId") as string

  if (!postId) return NextResponse.json({ error: "Post ID required" }, { status: 400 })

  await supabase.from("posts").update({ hidden: true }).eq("id", postId)

  return NextResponse.redirect(new URL("/admin/reports", request.url))
}