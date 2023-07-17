import React from "react";
import {Autocomplete, TextField} from "@mui/material";
import {useFilteredClients} from "@shared/hooks";
import {IGetClientsArgs} from "@income-on-track/shared";

type ClientsDropdownProps = {
  defaultClientId?: string
} & React.ComponentProps<'div'>

export const ClientsDropdown: React.FC<ClientsDropdownProps> = ({ children, defaultClientId, ...divProps }) => {
  const [clientsFilter, setClientsFilter] = React.useState<IGetClientsArgs>({
    filterText: '',
  })
  const [selectedClientId, setSelectedClientId] = React.useState<string | undefined>(defaultClientId)

  const updateFilterText = (filterText: string) => {
    setClientsFilter({ ...clientsFilter, filterText })
  }

  const onClientSelected = (clientId?: string) => {
    setSelectedClientId(clientId)
    console.log('clientId', clientId)

    if(!clientId) {
      setClientsFilter({ ...clientsFilter, filterText: undefined })
    }
  }

  const {clients} = useFilteredClients(clientsFilter);

  const clientsOptions = clients.map(client => ({ label: client.name, value: client.id }))

  return <Autocomplete renderInput={( params) => <TextField {...params} placeholder='Clients' />} {...divProps}
                       onChange={(e, value) => onClientSelected(value?.value)}
                       onFocus={() => updateFilterText('')}
                       inputValue={clientsFilter.filterText}
                       onInputChange={(e, value) => updateFilterText(value)}
                       options={clientsOptions}
  />
}
