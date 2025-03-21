import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token)return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="w=[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Venue Booking</div>

            <DateReserve></DateReserve>

            <button type="submit" name="Book Venue"
                className="block rounded-md bg-sky-600">
                Book Venue
            </button>

            <div className="bg-black m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.name}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
        </div>

        </main>
    );
}