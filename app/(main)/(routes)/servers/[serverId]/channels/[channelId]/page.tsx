import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";

type ChannelIdPageProps = {
	params: {
		serverId: string;
		channelId: string;
	};
};

export const ChannelIdPage = async ({
	params: { channelId, serverId },
}: ChannelIdPageProps) => {
	const profile = await currentProfile();

	if (!profile) return auth().redirectToSignIn();

	const channel = await db.channel.findUnique({
		where: { id: channelId },
	});

	const members = await db.member.findFirst({
		where: { serverId: serverId, profileId: profile.id },
	});

	if (!channel || !members) return redirect("/");

	return (
		<div className="bg-white dark:bg-[#313338] flex flex-col h-full">
			<ChatHeader name={channel.name} serverId={channel.serverId} type="channel" />
			<div className="flex-1">Future Messages</div>
			<ChatInput
				name={channel.name}
				type="channel"
				apiUrl="/api/socket/messages"
				query={{
					channelId: channel.id,
					serverId: channel.serverId,
				}}
			/>
		</div>
	);
};

export default ChannelIdPage;
