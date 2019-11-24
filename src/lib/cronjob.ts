import { IAssignment } from '@api/assignment/IAssignment'
import { Assignment } from '@api/assignment/assignmentModel'
import { Notification } from '@api/notification/notificationModel'

function dayDifferenceFromToday(deadline: Date): number {
    const today = new Date()
    const timeDifference = deadline.getTime() - today.getTime()
    const dayDifference = timeDifference / (1000 * 3600 * 24)
    return dayDifference
}

export async function cronJob() {
    const assignments: IAssignment[] = await Assignment.find()
    assignments.forEach(async assignment => {
        if (!assignment.isFinished) {
            const date = new Date(assignment.deadline)
            const dayDifference = dayDifferenceFromToday(date)

            if (dayDifference === 1) {
                await Notification.create({
                    type: 2,
                    idReference: assignment.employee,
                    user: assignment.employee,
                    message:
                        'Anda memiliki tugas yang harus terselesaikan besok',
                })
            } else if (dayDifference < 0) {
                await Notification.create({
                    type: 2,
                    idReference: assignment.employee,
                    user: assignment.employee,
                    message: 'Anda memiliki tugas yang telah melewati deadline',
                })
            }
        }
    })
}
