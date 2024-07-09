class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        nextIdleTime = 0
        netWaitTime = 0
        for i in customers:
            nextIdleTime = max(i[0],nextIdleTime) + i[1]
            netWaitTime += nextIdleTime - i[0]

        averageWaitTime = netWaitTime / len(customers)
        return averageWaitTime