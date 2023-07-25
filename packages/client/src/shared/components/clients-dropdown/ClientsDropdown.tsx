import React from "react";
import {Autocomplete, TextField} from "@mui/material";
import {useFilteredClients} from "@shared/hooks";
import {IGetClientsArgs} from "@income-on-track/shared";
import {AutocompleteProps} from "@mui/material/Autocomplete/Autocomplete";

type ClientsDropdownProps = {
  defaultClientId?: string
  onClientChange?: (clientId: string, clientName: string) => void
} & Omit<AutocompleteProps<any, any, any, any>, 'renderInput' | 'onChange' | 'onFocus' | 'inputValue' | 'onInputChange' | 'options' | 'defaultValue' | 'value'>

export const ClientsDropdown: React.FC<ClientsDropdownProps> = ({ defaultClientId, onClientChange, ...divProps }) => {
  const [clientsFilter, setClientsFilter] = React.useState<IGetClientsArgs>({
    filterText: '',
  })

  const [selectedClientId, setSelectedClientId] = React.useState<string | undefined>(defaultClientId)

  const updateFilterText = (filterText: string) => {
    setClientsFilter({ ...clientsFilter, filterText })
  }

  const {clients} = useFilteredClients(clientsFilter);

  const clientsOptions = clients.map(client => ({ label: client.name, value: client.id }))

  const selectedOption = clientsOptions.find(option => option.value === selectedClientId);

  const onClientSelected = (clientId?: string, clientName?: string) => {
    setSelectedClientId(clientId)
    clientId && clientName && onClientChange && onClientChange(clientId, clientName)

    if(!clientId) {
      setClientsFilter({ ...clientsFilter, filterText: undefined })
    }
  }

  return <Autocomplete renderInput={( params) => <TextField {...params} placeholder='Clients' />} {...divProps}
                       onChange={(e, value) => onClientSelected(value?.value, value?.label)}
                       onFocus={() => updateFilterText('')}
                       inputValue={clientsFilter.filterText ?? ''}
                       getOptionLabel={(option) => option.label}
                       onInputChange={(e, value) => updateFilterText(value)}
                       options={clientsOptions}
                       defaultValue={selectedOption}/>
}
