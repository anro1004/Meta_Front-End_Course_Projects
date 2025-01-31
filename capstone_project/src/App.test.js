import { initializeTimes, updateTimes } from './yourReducerFile';
import { fetchAPI } from './api';

jest.mock('./api', () => ({
    fetchAPI: jest.fn()
}));

describe('initializeTimes', () => {
    test('should return available booking times from fetchAPI', () => {
        const mockTimes = ['12:00', '14:00', '16:00'];
        fetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes();
        expect(result).toEqual(mockTimes);
    });
});

describe('updateTimes', () => {
    test('should return updated available times for the given date', () => {
        const mockTimes = ['10:00', '12:00', '18:00'];
        fetchAPI.mockReturnValue(mockTimes);

        const state = ['09:00', '11:00', '15:00'];
        const action = { type: 'UPDATE_TIMES', date: '2025-02-01' };

        const result = updateTimes(state, action);
        expect(result).toEqual(mockTimes);
    });
});
