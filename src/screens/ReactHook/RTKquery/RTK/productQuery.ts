import { emptySplitApi } from ".";

const apiWithTag = emptySplitApi.enhanceEndpoints({ addTagTypes: ['MedicalNoteTag'] })

const medicalNoteApi = apiWithTag.injectEndpoints({
  endpoints: (build) => ({
    listMedicalNoteTag: build.query<{ ability: string, 'encounter-condition': string }, { search?: string; limit?: number; hospital?: number }>({
      query: (params) => ({ url: `https://pokeapi.co/api/v2/`, method: 'GET', params }),
      providesTags: ['MedicalNoteTag'],
    }),
  }),
  overrideExisting: true,
})

export const { useListMedicalNoteTagQuery } = medicalNoteApi